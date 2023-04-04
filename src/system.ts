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
- 系统角色指令：如果想对KUPA AI机器人定制语气，口头禅等，可在每次提问时添加，需加句号引导。
- 思维发散程度：越高的设置会让KUPA 聊天机器人思维越发散，其创意性也就更高。（目前默认中等）
- 开启连续对话：目前每次对话有最大4096 token 的限制，如果连续对话超出限制，可删除一些之前对话然后再继续。
- 交互滚动操作：点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
