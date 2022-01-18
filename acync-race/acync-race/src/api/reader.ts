const API_URL = "http://localhost:3000/";

const reader = (url: string, method: string = "GET") => {
  console.log(url);
  return new Promise((resolve) => {
    fetch(url, { method })
      .then((response) => response.body)
      .then((rb) => {
        const reader = rb?.getReader();

        return new ReadableStream({
          start(controller) {
            function push() {
              reader?.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                push();
              });
            }

            push();
          }
        });
      })
      .then((stream) => {
        return new Response(stream, {
          headers: { "Content-Type": "text/html" }
        }).text();
      })
      .then((result: string) => {
        resolve(result);
      });
  });
};

export { API_URL };
export default reader;
