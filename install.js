module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Tencent/HunyuanDiT app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install gradio devicetorch",
          "pip install -r requirements.txt",
          "pip install huggingface_hub[cli]",
          "huggingface-cli download Tencent-Hunyuan/HunyuanDiT --local-dir ./ckpts",
          "pip install git+https://github.com/Dao-AILab/flash-attention.git@v2.1.2.post3"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    //  Uncomment this step to add automatic venv deduplication (Experimental)
   //   {
    //   method: "fs.link",
   //    params: {
    //     venv: "app/env"
    //   }
    // },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
