document.addEventListener('DOMContentLoaded', () => {
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
    
    const comparer = (idx, asc) => (a, b) => ((v1, v2) => {
        if (!isNaN(v1) && !isNaN(v2)) {
            return v1 - v2;
        } else {
            return v1.toString().localeCompare(v2);
        }
    })(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    document.querySelectorAll('.sortable th').forEach(th => th.addEventListener('click', (() => {
        const table = th.closest('table');
        Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
            .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
            .forEach(tr => table.appendChild(tr) );
    })));
});
