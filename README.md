Add angular universal and docker
https://dev.to/this-is-angular/angular-ssr-with-angular-universal-and-deploy-with-docker-13i

fix Some of undefined
https://stackoverflow.com/questions/62073400/angular-universal-cannot-read-property-some-of-undefined

ta bort: const options: ExtraOptions och spara bara :
routes och 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

fix Localstorage is not defined
https://softtechdiary.com/localstorage-is-not-defined-in-angular-universal/

npm install localstorage-polyfill
Now open the server.ts file and add the code to it.

import 'localstorage-polyfill';
global['localStorage'] = localStorage;

Deploy on windows IIS server
https://www.thecodehubs.com/how-to-deploy-ssr-angular-universal-to-iis/


DOCKER
ng build --prod && ng run pdts:server

#kör dockercontainern så att du kan använda sidan i browsern: sätt porten i host först sedan den som är exposed i contaninern
docker run --rm -it -p 4201:4200 timmeleuniversal

docker run --rm -it -p timmeleuniversal
#listar alla containers som körs
docker ps

#stoppar containern: stop +id från ps
docker stop fee9fc3e2280

devprojekt\wwwroot_wamp\Timmeletakstolsfabrik>
# Timmeletakstolsfabrik

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
