export const versionResolver = (req, res, next) => {
  const headerVersion = req.headers['api-version'];
  req.apiVersion = headerVersion ? headerVersion.toLowerCase() : 'v1';
  next();
};

export default versionResolver;
