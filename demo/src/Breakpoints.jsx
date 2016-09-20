import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

const button = cx(['btn', 'rounded', 'btn-outline']);

const Breakpoints = ({ bp }) => (
  <div>
    <div className="mx4">
      <br />
      <br />
      <h1>MobX React MatchMedia</h1>
      <h4>Resize your browser window to see the breakpoints changing automatically.</h4>
      <p>
        <a
          className={cx(button)}
          href="https://github.com/foxhound87/mobx-react-matchmedia"
        >
          <i className="fa fa-github" /> <b>foxhound87/mobx-react-matchmedia</b>
        </a>
      </p>
      <p>
        <a
          className={cx(button)}
          href="https://www.npmjs.com/package/mobx-react-matchmedia"
        >
          <i className="fa fa-archive" /> <b>package/mobx-react-matchmedia</b>
        </a>
      </p>
    </div>
    <br />
    <table className="bg-white p4 navy mt4">
      <tbody>
        <tr>
          <td className="h2 pb1">xs</td>
          <td className={cx('bold', { olive: bp.xs, red: !bp.xs })}>
            {bp.xs
              ? <i className="h1 fa fa-check-circle olive" />
              : <i className="h1 fa fa-times-circle red" />
            }
          </td>
          <td>Extra small devices</td>
        </tr>
        <tr>
          <td className="h2 pb1">su</td>
          <td className={cx('bold', { olive: bp.su, red: !bp.su })}>
            {bp.su
              ? <i className="h1 fa fa-check-circle olive" />
              : <i className="h1 fa fa-times-circle red" />
            }
          </td>
          <td>Small devices and UP</td>
        </tr>
        <tr>
          <td className="h2 pb1">sm</td>
          <td className={cx('bold', { olive: bp.sm, red: !bp.sm })}>
            {bp.sm
              ? <i className="h1 fa fa-check-circle olive" />
              : <i className="h1 fa fa-times-circle red" />
            }
          </td>
          <td>Small devices</td>
        </tr>
        <tr>
          <td className="h2 pb1">md</td>
          <td className={cx('bold', { olive: bp.md, red: !bp.md })}>
            {bp.md
              ? <i className="h1 fa fa-check-circle olive" />
              : <i className="h1 fa fa-times-circle red" />
            }
          </td>
          <td>Medium devices</td>
        </tr>
        <tr>
          <td className="h2 pb1">mu</td>
          <td className={cx('bold', { olive: bp.mu, red: !bp.mu })}>
            {bp.mu
              ? <i className="h1 fa fa-check-circle olive" />
              : <i className="h1 fa fa-times-circle red" />
            }
          </td>
          <td>Medium devices and UP</td>
        </tr>
        <tr>
          <td className="h2 pb1">lg</td>
          <td className={cx('bold', { olive: bp.lg, red: !bp.lg })}>
            {bp.lg
              ? <i className="h1 fa fa-check-circle olive" />
              : <i className="h1 fa fa-times-circle red" />
            }
          </td>
          <td>Large devices and UP</td>
        </tr>
      </tbody>
    </table>
  </div>
);


Breakpoints.propTypes = {
  bp: React.PropTypes.object,
};

export default observer(Breakpoints);
