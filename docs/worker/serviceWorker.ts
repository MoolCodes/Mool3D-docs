var CACHE_NAME = "mool-sw";
var urlsToCache = ["/", "/docs/public"];

self.addEventListener("install", function (event) {
  // 在install阶段里可以预缓存一些资源
  (event as any).waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

//在fetch事件里能拦截网络请求，进行一些处理
self.addEventListener("fetch", function (event) {
  (event as any).respondWith(
    caches.match((event as any).request).then(function (response) {
      // 如果匹配到缓存里的资源，则直接返回
      if (response) {
        return response;
      }

      // 匹配失败则继续请求
      var request = (event as any).request.clone(); // 把原始请求拷过来

      //默认情况下，从不支持 CORS 的第三方网址中获取资源将会失败。
      // 您可以向请求中添加 no-CORS 选项来克服此问题，不过这可能会导致“不透明”的响应，这意味着您无法辨别响应是否成功。
      if (
        request.mode !== "navigate" &&
        request.url.indexOf(request.referrer) === -1
      ) {
        request = new Request(request, { mode: "no-cors" });
      }

      return fetch(request).then(function (httpRes) {
        //拿到了http请求返回的数据，进行一些操作

        //请求失败了则直接返回、对于post请求也直接返回，sw不能缓存post请求
        if (
          !httpRes ||
          (httpRes.status !== 200 &&
            httpRes.status !== 304 &&
            httpRes.type !== "opaque") ||
          request.method === "POST"
        ) {
          return httpRes;
        }

        // 请求成功的话，将请求缓存起来。
        var responseClone = httpRes.clone();
        caches.open("mool-sw").then(function (cache) {
          cache.put((event as any).request, responseClone);
        });

        return httpRes;
      });
    })
  );
});
