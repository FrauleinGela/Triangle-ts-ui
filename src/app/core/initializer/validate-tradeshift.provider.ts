const validateTradeshift = function validateTradeshift() {
  return () => {
    // tradeshift ready
    // TODO: Add error component
    ts.ui.ready(
      () => console.info('tradeshift ui ready'),
      () => console.error('tradeshift wasnt properly loaded')
    );
  }
}
export const validateTradeshift;
