import 'bootstrap/scss/bootstrap.scss';


function Tablazat({ cim, polc }) {

    return (
        <tr>
            <td>
                {cim}
            </td>
            <td>
                {polc}
            </td>
        </tr>

    );
}

export default Tablazat;
