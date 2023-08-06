//we are going to put all of the queries we are going to use in this file
const QUERY = {
    SELECT_PATIENTS: 'SELECT * FROM patients ORDER BY created_at DESC LIMIT 100',
    SELECT_PATIENT: 'SELECT * FROM patients WHERE id=?', // ? is there because id is going to be dynamic
    CREATE_PATIENT: 'INSERT INTO patients(first_name, last_name, email, phone, address, diagnosis, image_url) VALUES (?,?,?,?,?,?,?)',
    UPDATE_PATIENT: 'UPDATE patients SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, diagnosis = ?, image_url = ? WHERE id = ?',
    DELETE_PATIENTS: 'DELETE FROM patients WHERE id = ?',
}
export default QUERY;