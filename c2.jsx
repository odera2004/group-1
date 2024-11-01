const React = require('react');

// Task 1: Create the header with favorite codewarriors
const myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>;

// Task 2: CodewarsLink component
const CodewarsLink = ({ user }) => {
    return (
        <a href={`http://www.codewars.com/users/${user}`} key={user}>
            {user}
        </a>
    );
};

// Task 3: Leaderboard component
const Leaderboard = ({ leaders }) => {
    return (
        <div>
            {leaders.map((user) => (
                <CodewarsLink user={user} key={user} />
            ))}
        </div>
    );
};

// Main App component
const App = () => {
    const leaders = ['Sch3lp', 'nplus', 'noLan', 'jhoffner', 'OverZealous'];

    return (
        <div>
            {myHeader}
            <Leaderboard leaders={leaders} />
        </div>
    );
};

module.exports = App;