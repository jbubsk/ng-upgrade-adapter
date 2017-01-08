import {rootModule} from './ng1/main.component';
import {upgradeAdapter} from './app.module';

upgradeAdapter.bootstrap(document.body, [rootModule.name]);
