import { hash256 } from "./crypt"

// ハッシュ解答 
export const uHashed = "1dtfOJMPWjwnJW-Vz75208srYoRIVNe8PG9zTYJnBbA"
export const rHashed = "hp6TlfWWSJwJZWCFkZmK_n-VguBFH8p1KRgHh2Lyq7E"

export const uPlainMessages = [
    "ここは「うろぼろす」の間である。",
    "ひとつだけある正しいルートを通り",
    "入口",
    "からもう一度この場所へ訪れよ。",
    "そうすれば最後の答えが分かる。",
    "最後の答えをこの場所で入力せよ。"
]

// 解答ステータス 
export const ANSWER_STATUS = {
    // うろぼろす 
    U: "u",
    // らびりんす 
    R: "r",
    // 不正解 
    F: "f"
} as const

export type AnswerStatus = typeof ANSWER_STATUS[keyof typeof ANSWER_STATUS]



// 解答判定 
export const judgeAnswer = (inputValue: string): AnswerStatus => {
    const hashedInputValue = hash256(inputValue.trim())

    if (hashedInputValue === uHashed) return ANSWER_STATUS.U
    else if (hashedInputValue === rHashed) return ANSWER_STATUS.R
    else return ANSWER_STATUS.F
}