const Bar = ({ beer, wine, whiskey, total, onBarSupplyAdd }) => {
  return (
    <div>
      <ul>
        <li>Beer: {beer}</li>
        <li>Wine: {wine}</li>
        <li>Whiskey: {whiskey}</li>
        <li>
          <b>Total</b>: {total}
        </li>
      </ul>
      <button type="button" onClick={() => onBarSupplyAdd()}>
        Add Beer
      </button>
      <button type="button" onClick={() => onBarSupplyAdd()}>
        Add Wine
      </button>
      <button type="button" onClick={() => onBarSupplyAdd()}>
        Add Whiskey
      </button>
    </div>
  );
};

export default Bar;
