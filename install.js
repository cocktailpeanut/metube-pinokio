module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        venv_python: "3.13",
        path: "app",
        message: [
          "uv sync"
        ]
      }
    }
  ]
}
