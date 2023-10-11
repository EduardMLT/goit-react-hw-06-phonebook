export const ContactListCard = ({ item: { id, name, number }, onDelete }) => {
  return (
    <>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};