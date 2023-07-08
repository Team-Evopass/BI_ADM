const XLSX = require('xlsx'); //Usado para salvar o arquivo em forma de buffer

export default function download_file (my_data) {

    // Array de dados
    const data = my_data
    
    // Cria uma nova pasta de trabalho
    const workbook = XLSX.utils.book_new();
    
    // Cria uma nova planilha
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    
    // Adiciona a planilha à pasta de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');
    
    // Salva a pasta de trabalho como um arquivo .xlsx
    var file = XLSX.writeFile(workbook, 'dados.xlsx');

}