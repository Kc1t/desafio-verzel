export function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    
    if (!year || !month || !day) {
      throw new Error('Data inválida');
    }
    
    return `${day}/${month}/${year}`;
  }
  