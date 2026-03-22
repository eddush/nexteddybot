module.exports = {
  name: "echo",
  execute(message, args) {
    message.reply(args.join(" "));
  },
};
