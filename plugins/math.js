global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix }) => {
  if (args.length < 1) return conn.reply(m.chat, 'Mode: noob | easy | medium | hard | extreme\n\nExample of use: ' + usedPrefix + 'math medium', m)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return conn.reply(m.chat, 'Mode: noob | easy | medium | hard | extreme\n\nExample of use: ' + usedPrefix + 'math medium', m)
  let id = m.chat
  if (id in global.math) return conn.reply(m.chat, 'There are still questions not answered in this chat', global.math[id][0])
  let math = genMath(mode)
  global.math[id] = [
    await conn.reply(m.chat, `How many results from *${math.str}*?\n\nTimeout: ${(math.time / 1000).toFixed(2)} second\nCorrect Answer Bonus: ${math.bonus} XP`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) conn.reply(m.chat, `Time has run out!\nThe answer is ${math.result}`, global.math[id][0])
      delete global.math[id]
    }, math.time)
  ]
}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math/i

module.exports = handler

let modes = {
  noob: [-3, 3,-3, 3, '+-', 20000, 35],
  easy: [-10, 10, -10, 10, '+-', 30000, 50],
  medium: [-40, 40, -20, 20, '*/+-', 50000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 400],
  extreme: [-999999, 999999, -999999, 999999, '*/+-', 300000, 9999]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
