module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "App name"
    },
    description: {
      type: "string",
      required: false,
      message: "App description",
      default: "Nuxt + Express + TypeScript project"
    },
    author: {
      type: "string",
      required: false,
      message: "Author"
    }
  },
  completeMessage:[
    "{{#inPlace}}",
    "To get started:\n\n  npm install \n  npm run dev",
    "\n\nshortcut:\n\n  npm i && npm run dev",
    "{{else}}",
    "To get started:\n\n  cd {{destDirName}}\n  npm install \n  npm run dev",
    "\n\nshortcut:\n\n  cd {{destDirName}} && npm i && npm run dev",
    "{{/inPlace}}"
  ].join("")
}
