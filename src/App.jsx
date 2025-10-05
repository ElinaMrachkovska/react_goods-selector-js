import React, { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClear = () => {
    setSelectedGood('');
  };

  const handleSelect = good => {
    setSelectedGood(good);
  };

  const isGoodSelected = !!selectedGood;

  const headerText = isGoodSelected
    ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <div className="block">
        <h1 className="title is-flex is-align-items-center">
          {headerText}

          {isGoodSelected && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClear}
              aria-label="Clear selection"
            />
          )}
        </h1>
      </div>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      // Використовуємо клас is-danger для кнопки видалення
                      className="button is-danger"
                      onClick={handleClear}
                      aria-label={`Remove ${good} from selection`}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button is-primary"
                      onClick={() => handleSelect(good)}
                      aria-label={`Select ${good}`}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default App;
