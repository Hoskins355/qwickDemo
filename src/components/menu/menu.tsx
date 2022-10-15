import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

    return (
        <div style={{display: 'flex', marginLeft: '30px'}} >
            <Link href="/debounce" style={{width: '33%'}} >
                Debounce
            </Link>
            <Link href="/counter" style={{width: '33%'}} >
                Counter
            </Link>
            <Link href="/typeahead" style={{width: '33%'}} >
                Typeahead
            </Link>
            <Link href="/react" style={{width: '33%'}} >
                React Component
            </Link>
        </div>
    );
});
