const env = process.env;
//console.log(env);

export default {
  port: env.port || 1712
};

export const nodeEnv = env.NODE_ENV || "development";

export const logStars = function(message) {
  console.info("*****************");
  console.info(message);
  console.info("*****************");
};
