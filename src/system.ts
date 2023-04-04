import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `欢迎使用 KUPA聊天机器人
- 【请在下方输入框中提出您的问题展开对话】
- 设置提示：
- 系统角色指令：会在每次提问时添加，需加句号。主要对ChatGPT的语气，口头禅这些定制。
- 思维发散程度：越高 KUPA 聊天机器人思维就越发散，创意性的就可以调高一点。（默认中等）
- 开启连续对话：每次对话目前有最大4096 token 的限制，可以删除一些之前对话再继续。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
