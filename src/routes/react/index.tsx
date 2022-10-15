import { component$, useStore } from '@builder.io/qwik';
import counter from '../../components/icons/counter.png'

export default component$(() => {
    const store = useStore({ count: 0 });

    return (
        <div>
            <p>Count: {store.count}</p>
            <p>
                <button onClick$={() => store.count++}>Click</button>
            </p>
            <img src={counter} style={{maxWidth: '100%', maxHeight: '100%'}} />
        </div>
    );
});
