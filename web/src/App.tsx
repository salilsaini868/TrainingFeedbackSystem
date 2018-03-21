import * as React from 'react';
import './assets/css/style.css';

import { translate } from 'react-i18next';

// tslint:disable-next-line:no-any
class App extends React.Component<{ t: any, i18n: any }, any> {

  changeLanguage = (lng: string) => {
    this.props.i18n.changeLanguage(lng);
  }

  //  const { t, tReady } = props;
  render() {
    return (
      <div className="content">

        <h2>{this.props.t('common.appTile')}</h2>
        <div className="main">
          <div className="change-lang">
            <p>{this.props.t('common.switchLang')}</p>
            <a onClick={() => this.changeLanguage(this.props.t('common.langCode'))} href="javascript:void(0)" >
              {this.props.t('common.lang')}</a>
          </div>
          <div className="form-main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default translate('translations')(App);
