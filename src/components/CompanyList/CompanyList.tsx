import * as React from 'react';
import { ICompany } from '../../models/company';
import { AdminContext } from '../../redux/adminContext';
import Product from '../Product/Product';

interface ICompanyListProps {
}

const CompanyList = (props: ICompanyListProps) => {
    return <AdminContext.Consumer>
    {
      ({companies}: any) => ( companies?.map((c: ICompany) => {
        return <div key={c.id}>{c.name}</div>}) 
      )
    }
    </AdminContext.Consumer>
}

export default CompanyList;
