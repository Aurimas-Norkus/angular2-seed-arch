/**
 * Created by aurimasnorkus on 18/05/16.
 */
interface TplItem {
  tpl: any; // Template from tpl/views
  type?: string; // Input types
  placeholder?: string; // Input types
  disabled?: boolean; // Input types
  name?: string; // Name that associate component to service data
  title?: string; // Common title to show in template
  init?: void; // Hook function,
  children?: any; // Element children's objects
}
