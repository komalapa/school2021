const reader = (url) => {
  return new Promise((resolve) => {
    fetch(url)
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
export default reader;
