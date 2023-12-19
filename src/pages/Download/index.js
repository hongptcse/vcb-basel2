import { useState, useEffect, useRef } from 'react';

import * as searchServices from '~/apiServices/getStaffService';
import styles from './Download.module.scss';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExportPdf from '~/utils/ExportPdf';

const cx = classNames.bind(styles);

function Download() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await searchServices.getStaff();
      // console.log(result);
      setSearchResult(result);
    };

    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('report-title')}>
        <h2>BÁO CÁO CHI TIẾT NHÂN VIÊN</h2>
      </div>
      <div>
        <ExportPdf v_data={searchResult} />
      </div>
      {/* <div className={cx('report-content')}>
        <table className={cx('table table-striped')}>
          <thead className={cx('thead-dark')}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Office</th>
              <th scope="col">Age</th>
              <th scope="col">Start date</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {searchResult.map((items, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{items.Name}</td>
                  <td>{items.Position}</td>
                  <td>{items.Office}</td>
                  <td>{items.Age}</td>
                  <td>{items.StartDate}</td>
                  <td>{items.Salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default Download;
