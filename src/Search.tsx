
import { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  const users = [
    "John",
    "Peter",
    "Mary",
    "David",
    "Sarah"
  ];

  useEffect(() => {
    const results = users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(results);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default Search;