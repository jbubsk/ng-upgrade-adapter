import {rootModule} from './ng1/root.component';
import {upgradeAdapter} from './app.module';

upgradeAdapter.bootstrap(document.body, [rootModule.name]);
