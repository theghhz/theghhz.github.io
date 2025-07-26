function baixarCurriculo() {
  const link = document.createElement('a');
  link.href = '/downloads/GelsonHigino_Curriculo.pdf';
  link.download = 'GelsonHigino_Curriculo.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function baixarMacroMu() {
    const link = document.createElement('a');
    link.href = '../downloads/autotudov2.exe';
    link.download = 'autotudov2.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    document.getElementById('statusDownload').innerText = '✅ Download concluído!';
  }