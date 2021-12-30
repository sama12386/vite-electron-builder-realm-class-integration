import * as Realm from 'realm';
import Dog from '/@/Dog';

export default class RealmHolder {

  private static readonly REALM_APP_ID: string = '{app-id}';

  private static realmApp: Realm.App;
  private static realm: Realm;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
  }

  public static async getRealm() {
    if(!RealmHolder.realm){
      await this.openRealm();
    }
    return RealmHolder.realm;
  }

  private static async openRealm() {
    RealmHolder.realmApp = new Realm.App({id: RealmHolder.REALM_APP_ID});
    await RealmHolder.realmApp.logIn(Realm.Credentials.anonymous());

    const config = {
      schema: [Dog],
      path: 'dog1.realm',
      sync: {
        user: RealmHolder.realmApp.currentUser,
        partitionValue: 'dog1',
      },
    } as Realm.Configuration;

    RealmHolder.realm = await Realm.open(config);
  }
}
