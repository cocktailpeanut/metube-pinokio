module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git pull"
        ],
        path: "app"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: ".venv",
        path: "app",
        message: [
          "uv sync"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/ui",
        message: [
          "pnpm install",
          "pnpm run build"
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Updated MeTube"
      }
    }
  ]
}
