MemoryHome = require ("../src/memoryHome")
Producto = require ("../src/producto")

var home
var chocolate
var alfajor


function setup() {
    home = new MemoryHome()
    chocolate = new Producto("chocolate", 30)
    alfajor = new Producto("alfajor", 20)
    home.insert(alfajor)
    home.insert(chocolate)
}

function get() {
    expect(home.get(chocolate.id)).toBe(chocolate)
    expect(home.get(alfajor.id)).toBe(alfajor)
}

function getNotContained() {
    expect(home.get("pirulito")).toBe(undefined)
}

function deleteObject() {
    home.delete(chocolate.id);
    expect(home.get(chocolate.id)).toBe(undefined)
    expect(home.get(alfajor.id)).toBe(alfajor)
}

function update() {
    chocolate.precio = 45
    home.update(chocolate);
    expect(home.get(chocolate.id).precio).toBe(45);
}

function all() {
    var all = home.all();
    expect(all).toContain(chocolate);
    expect(all).toContain(alfajor);
}

// register functions

beforeEach(setup)
test(get.name, get)
test(getNotContained.name, getNotContained)
test(deleteObject.name, deleteObject)
test(update.name, update)
test(all.name, all)
