export default function formatDateBR(date: String) {
    return date.split('-').reverse().join('/');
}