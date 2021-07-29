/* IndexedDB is a database that lives on the browser and is capable of storing larger amounts of data than local storage or cookies. */
let db; 

const request = indexedDB.open('BudgetDB', 1);

// here we create the tables in our database. Target is our database, and db is getting the target(database) result. 
// onupgradeneeded will shape the look of our database (we set up object stores and indexes here which will be utilized in order to diverse the database)
request.onupgradeneeded = ({ target }) => {
    db = target.result;
    // The createObjectStore() method of the IDBDatabase interface creates and returns a new object store or index. The method takes the name of the store as well as a parameter object that lets you define important optional properties. You can use the property to uniquely identify individual objects in the store. As the property is an identifier, it should be unique to every object, and every object should have that property.
    const objectStore = db.createObjectStore('BudgetStore');
    objectStore.createIndex('nameIndex', 'name');
    objectStore.createIndex('valueIndex', 'value');
    objectStore.createIndex('dateIndex', 'date');

}

// here we manipulate the data of the database and perform any transaction on the database when it's fully loaded.
request.onsuccess = () => {
    console.log('Created IDB', request.result);
};



