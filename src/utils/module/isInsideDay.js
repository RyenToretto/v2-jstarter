export const isInsideDay = (tick) => {
  return new Date(tick).getTime() >= new Date().getTime() - window.MS_PER_DAY
}
