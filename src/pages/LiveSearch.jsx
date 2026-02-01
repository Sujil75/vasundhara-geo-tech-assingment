import React, {useState} from 'react'

const namesList = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Williams",
  "Eve Jackson"
]

function LiveSearch() {
  const [searchVal, setSearchVal] = useState("")

  const filteredList = namesList.filter(name => name.toLowerCase().includes(searchVal.toLowerCase()))

  const filterRegExp = value => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  // to highlight names
  const highlightedNames = (name, search) => {
    if (!search) return name

    const correctedSearh = filterRegExp(search)
    const regex = new RegExp(`(${correctedSearh})`, "gi")

    return name.split(regex).map((item, index) => (
        item.toLowerCase() === search.toLowerCase() ? (
            <span
                key={index}
                style={{fontWeight: 'bold', backgroundColor: 'yellow'}}
            >{item}</span>
        ) : (item)
    ))
  }

  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <h1 className='font-bold text-[50px]'>Live Search with Highlighting</h1>

      <div className='w-[50%] flex flex-col items-center gap-5'>
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='searchInput'>Search</label>
            <input 
                type='text' 
                id='searchInput'
                className='box-border border p-2 px-4 rounded-lg text-[13px] w-full'
                placeholder='Search name here...'
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
            />
        </div>

        <p className='self-start font-bold'>{`Names Count: ${filteredList.length}`}</p>

        <ul className='list-disc self-start pl-5'>
            {filteredList.map(name => (
                <li>
                    {highlightedNames(name, searchVal)}
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default LiveSearch