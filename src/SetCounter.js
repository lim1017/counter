import { useDispatch } from 'react-redux';
import { set } from './redux/actions';

export const SetCounter = () => {
  const dispatch = useDispatch();

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);

          dispatch(set(formData.get('number')));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input name="number" id="set-to" type="number" />
        <input type="submit" />
      </form>
    </section>
  );
};
