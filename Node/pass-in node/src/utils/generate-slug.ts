export function generateSlug (text: string): string {
    return text
    .normalize("NFD")
    .replace(/[\u036f-\u8300]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}