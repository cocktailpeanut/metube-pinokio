module.exports = async (kernel) => {
  const PORT = await kernel.port()
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",
          path: "app",
          env: {
            "HOST": "127.0.0.1",
            "PORT": PORT,
            "DOWNLOAD_DIR": "../downloads"
          },
          message: [
            "uv run python3 main.py"
          ],
          on: [{
            event: "/(http:\\/\\/[0-9.:]+)/",
            done: true
          }]
        }
      },
      {
        method: "local.set",
        params: {
          url: "{{input.event[1]}}"
        }
      }
    ]
  }
}
