class UserService {
    sayHi() {
        console.log('Hi!');
        
    } 
}

class Component {
    constructor(private user: UserService) {

    }
}

// Angular DI

class Injector {
    private _container = new Map();

    constructor(private _providers: any[] = []) {
        this._providers.forEach(service => this._container.set(service, new service()))
    }

    get(service: any) {
        const serviceInstance = this._container.get(service);
        if (!serviceInstance) {
            throw Error('No provider found');
        }
        return serviceInstance;
    }
}


// Somewhere in application

const injector1 = new Injector([UserService]);
const injector2 = new Injector([UserService]);
const component1 = new Component(injector1.get(UserService));
const component2 = new Component(injector2.get(UserService));