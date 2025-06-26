import React, {useState,useEffect} from 'react'

function Effect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
        useEffect(() => {
            console.log('useEffect called!');
            console.log('Count:',count);
            console.log('Name:',name);
        },[]);

        console.log('Name:',name);
        return (
            <div>
                <h2>useEffect Example</h2>
                <div>
                    <button onClick={() => setCount(count+1)}>Increment</button>
                </div>
                <div>
                    <button onClick={() => setCount('New Name')}>Change name</button>
                </div>
            </div>
        )
    
}