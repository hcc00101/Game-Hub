const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url !== null ? url.indexOf(target) + target.length : -1;
  return index !== -1
    ? url.slice(0, index) + "crop/600/400/" + url.slice(index)
    : url;
};

export default getCroppedImageUrl;
