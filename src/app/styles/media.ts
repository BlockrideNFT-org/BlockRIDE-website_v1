// NOTE: this design is desktop first, hence: max-width
const mq = (bp: number) => `@media (max-width: ${bp}px)`;

const media = {
  mobile: mq(660), // mobile
};
export default media;
