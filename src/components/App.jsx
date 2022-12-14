import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: `column`,
        alignItems: `center`,
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
