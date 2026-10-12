/* Long Quiz logic. The questions are in the QUESTIONS array at the top:
   "answer" is the index (0 = first, 1 = second, 2 = third, 3 = fourth) of the correct option. */
const QUESTIONS = [
  {"q": "A mutation prevents a cell from properly detoxifying harmful substances and breaking down highly reactive chemicals. Which organelle would be most directly affected?", "options": ["Lysosome, because it digests non-usable materials inside the cell", "Peroxisome, because it detoxifies substances and breaks down free radicals", "Ribosome, because it synthesizes proteins required for cellular functions", "Centriole, because it organizes structures involved in cell division"], "answer": 1},
  {"q": "A purple-flowered pea plant has an unknown genotype. It is crossed with a white-flowered plant having genotype pp, producing both purple and white offspring. What is the most reasonable conclusion?", "options": ["The purple parent is probably homozygous dominant.", "The purple parent is certainly homozygous dominant.", "The purple parent is certainly heterozygous.", "The purple parent is probably homozygous recessive."], "answer": 2},
  {"q": "A physiological process begins with a stimulus and continues by intensifying that same stimulus until the process reaches completion. Which mechanism best describes this pattern?", "options": ["Positive feedback increases the original stimulus and strengthens the response", "Negative feedback increases the original stimulus and strengthens the response", "Positive feedback reduces the original stimulus and limits the response", "Negative feedback reduces the original stimulus and limits the response"], "answer": 0},
  {"q": "A patient's internal temperature changes from its normal range. The regulatory system detects the change and determines what response should occur. Which component performs this decision-making function?", "options": ["The receptor detects the stimulus and sends information to another component", "The control center analyzes information and determines the appropriate response", "The effector detects the stimulus and determines the body's internal set point", "The receptor produces the response and restores the variable toward its set point"], "answer": 1},
  {"q": "A patient experiences reduced oxygen delivery to tissues together with carbon dioxide accumulation. Which interpretation best reflects the coordinated functions of two organ systems?", "options": ["Respiratory exchange supplies oxygen while cardiovascular transport distributes gases", "Digestive absorption supplies oxygen while urinary filtration distributes gases", "Skeletal support supplies oxygen while muscular contraction removes gases", "Endocrine secretion supplies oxygen while lymphatic drainage removes gases"], "answer": 0},
  {"q": "A researcher compares a gene with an allele while analyzing inherited variation. Which statement best distinguishes the two concepts?", "options": ["A gene is a chromosome region, whereas an allele is a complete chromosome.", "A gene is a hereditary unit, whereas an allele is an alternative version.", "A gene is an observable trait, whereas an allele is a protein product.", "A gene is a protein sequence, whereas an allele is a regulatory enzyme."], "answer": 1},
  {"q": "In a population, the heritability of height is reported as 80%. Which interpretation is most consistent with the lesson?", "options": ["Eighty percent of each person's height is determined by genes.", "Eighty percent of differences in height are associated with genetic differences.", "Eighty percent of people inherited the same genetic contribution to height.", "Eighty percent of environmental influences on height are genetically controlled."], "answer": 1},
  {"q": "Water molecules remain attracted to one another, while water can also interact with other polar substances. Which property of water most directly explains this behavior?", "options": ["Water is nonpolar and therefore interacts equally with every substance.", "Water is polar and can attract other polar substances through charge differences.", "Water is ionic and therefore separates completely into charged particles.", "Water is acidic and therefore forms bonds with all dissolved substances."], "answer": 1},
  {"q": "A student states that temperature represents the amount of potential energy stored in molecules. Which correction is most consistent with the lesson?", "options": ["Temperature reflects kinetic energy because it is related to molecular movement.", "Temperature reflects chemical energy because it is stored within molecular bonds.", "Temperature reflects mechanical energy because molecules occupy physical space.", "Temperature reflects electrical energy because molecules contain charged particles."], "answer": 0},
  {"q": "Which development most directly changed scientific understanding of how hereditary information is physically stored?", "options": ["Hippocrates' proposal of the Four Humors", "Galton's study of family pedigrees", "Watson and Crick's double-helix model of DNA", "Skinner's explanation of behavior through consequences"], "answer": 2},
  {"q": "A microscope image shows chromosomes arranged along the middle of the cell while spindle structures are attached to them. Which stage is represented?", "options": ["Prophase, because chromosomes begin organizing for nuclear division", "Metaphase, because chromosomes align at the center of the cell", "Anaphase, because daughter chromosomes move toward opposite poles", "Telophase, because daughter nuclei begin forming around chromosomes"], "answer": 1},
  {"q": "A chemical substance is added to a solution to reduce a sudden change in hydrogen-ion concentration. Which role is the substance performing?", "options": ["It functions as a buffer that regulates changes in pH.", "It functions as a salt that completely removes hydrogen ions.", "It functions as an electrolyte that prevents molecular movement.", "It functions as an acid that continuously lowers the pH."], "answer": 0},
  {"q": "The HGP contributed to medical research by improving knowledge of genetic disease mechanisms. Which application best follows from this contribution?", "options": ["Replacing psychological assessment with genetic testing in all cases", "Developing more accurate diagnostics and more targeted treatments", "Eliminating environmental influences from disease prevention strategies", "Determining that every disease has a single identifiable genetic cause"], "answer": 1},
  {"q": "Sodium loses an electron and chlorine gains an electron during the formation of sodium chloride. Which explanation best accounts for the resulting interaction?", "options": ["Both atoms share electrons equally and form a covalent bond.", "Electrons are transferred, producing oppositely charged ions that attract.", "Hydrogen atoms form weak attractions between the two substances.", "Neutrons move between atoms, producing electrically neutral particles."], "answer": 1},
  {"q": "A student claims that the discovery of approximately 20,000–21,000 protein-coding genes proves that humans are biologically simple. Which conclusion from the HGP most directly challenges this claim?", "options": ["Human cells contain different chromosomes in every tissue.", "Human complexity depends on interactions among genes, proteins, and environments.", "Human beings possess more genes than originally estimated by researchers.", "Human behavior is determined almost entirely by inherited genetic information."], "answer": 1},
  {"q": "A muscle cell and a pancreatic cell contain essentially the same DNA, yet they produce different proteins. Which explanation best accounts for this difference?", "options": ["The cells contain completely different genomes after differentiation.", "The cells contain different chromosomes because their tissues perform different functions.", "The cells activate different genes according to their specialized functions.", "The cells eliminate unused DNA before producing their specialized proteins."], "answer": 2},
  {"q": "During translation, a molecule carrying an amino acid binds to a complementary sequence on mRNA. Which molecule is performing this role?", "options": ["Ribosome, because it carries the amino acid to the growing chain.", "tRNA, because its anticodon matches the mRNA codon.", "DNA, because its nucleotide sequence directly binds each amino acid.", "mRNA, because its codons transport amino acids to the ribosome."], "answer": 1},
  {"q": "Human DNA is approximately two meters long inside a microscopic nucleus. Which structural arrangement most directly allows the DNA to fit within the nucleus?", "options": ["DNA wraps around histones to form organized chromatin structures.", "DNA breaks into separate molecules to form smaller genetic units.", "DNA removes its bases to reduce the overall molecular length.", "DNA converts its nucleotides into proteins to reduce nuclear volume."], "answer": 0},
  {"q": "Two heterozygous individuals with genotype YyRr are crossed. Which phenotypic ratio is predicted when the two allele pairs assort independently?", "options": ["1 : 1 : 1 : 1", "3 : 1 : 1 : 3", "9 : 3 : 3 : 1", "12 : 3 : 1 : 0"], "answer": 2},
  {"q": "A patient asks why identifying a genetic variant associated with a mental-health condition does not necessarily mean that the person will develop that condition. Which response is most consistent with the lesson?", "options": ["Genetic variants have no meaningful relationship with psychological conditions.", "Most psychological traits involve multiple genes and environmental influences.", "Genetic information predicts behavior with complete individual certainty.", "Psychological conditions arise only after environmental exposure without genetic influence."], "answer": 1},
  {"q": "A patient has impaired immune defense and reduced return of excess tissue fluid to the bloodstream. Which organ system is most directly associated with both functions?", "options": ["Lymphatic system supports fluid return and immune defense mechanisms", "Respiratory system supports oxygen delivery and carbon dioxide elimination", "Digestive system supports nutrient absorption and indigestible material removal", "Urinary system supports waste elimination and electrolyte regulation mechanisms"], "answer": 0},
  {"q": "A newly formed mRNA molecule moves to a ribosome, where its nucleotide sequence is used to determine an amino acid sequence. Which process is occurring?", "options": ["Replication, because genetic information is copied before cell division.", "Transcription, because DNA information is transferred into messenger RNA.", "Translation, because messenger RNA directs the formation of a protein.", "Regulation, because messenger RNA controls which genes remain active."], "answer": 2},
  {"q": "A cell releases a large protein outside the cell by enclosing it in a vesicle that fuses with the plasma membrane. Which process is occurring?", "options": ["Phagocytosis, because the cell engulfs extracellular solid material", "Pinocytosis, because the cell takes extracellular fluid into vesicles", "Exocytosis, because vesicles release materials outside the cell", "Osmosis, because water movement drives vesicles toward the membrane"], "answer": 2},
  {"q": "A geneticist studies a human trait that does not follow a simple one-gene, two-allele pattern but still observes segregation principles in the inheritance data. Which conclusion best reflects the final concept in the lesson?", "options": ["Mendelian principles become useless whenever inheritance becomes complex.", "Complex inheritance completely eliminates segregation and assortment principles.", "Basic Mendelian principles can still apply to more complex inheritance patterns.", "Simple Mendelian genetics explains every heritable trait without modification."], "answer": 2},
  {"q": "A cell is producing large amounts of protein for export outside the cell. Which combination of organelles would be most directly involved in this process?", "options": ["Rough ER → Golgi apparatus → secretory vesicles", "Smooth ER → lysosome → nuclear membrane", "Nucleolus → mitochondrion → centriole", "Peroxisome → cytoskeleton → plasma membrane"], "answer": 0},
  {"q": "A researcher is studying a DNA region that does not directly code for a protein but appears to influence when another gene is activated. Which HGP finding is most relevant to this investigation?", "options": ["Most human DNA is identical among individuals.", "Much of human DNA serves regulatory rather than direct protein-coding functions.", "Human chromosomes contain only protein-coding genes.", "Biological complexity depends mainly on the total number of genes present."], "answer": 1},
  {"q": "Mendel selected pea plants with contrasting traits and controlled their mating during his experiments. Which feature most directly strengthened his ability to identify inheritance patterns?", "options": ["Their traits showed continuous variation across many generations.", "Their mating could be controlled between distinct inherited forms.", "Their environments could be changed without affecting reproduction.", "Their chromosomes could be observed directly during fertilization."], "answer": 1},
  {"q": "A substance crosses the plasma membrane through a protein carrier without requiring cellular energy. Which transport mechanism is being demonstrated?", "options": ["Simple diffusion, because no transport protein participates in movement", "Facilitated diffusion, because a carrier assists passive movement", "Solute pumping, because ATP provides energy for the transport process", "Bulk transport, because vesicles move materials across the membrane"], "answer": 1},
  {"q": "An mRNA molecule contains the codon AUG at the beginning of its coding sequence. According to the lesson, which amino acid does this codon specify?", "options": ["Methionine, because AUG is identified as the example codon.", "Tryptophan, because AUG contains three complementary nucleotides.", "Glycine, because AUG represents the first codon in the sequence.", "Alanine, because AUG is transported directly by messenger RNA."], "answer": 0},
  {"q": "A solution contains a substance that easily dissociates into ions when dissolved in water and allows the solution to conduct electrical current. Which classification best fits the substance?", "options": ["Salt, because ionic compounds dissociate into ions in water.", "Acid, because every conducting solution contains detectable hydrogen ions.", "Base, because electrical conductivity requires hydroxide ions in solution.", "Molecule, because all dissolved substances remain chemically unchanged."], "answer": 0},
  {"q": "A researcher separates the two strands of a DNA molecule and examines their complementary relationships. Which pairing pattern should be preserved when a new strand is formed?", "options": ["Adenine pairs with cytosine, while guanine pairs with thymine.", "Adenine pairs with thymine, while cytosine pairs with guanine.", "Adenine pairs with guanine, while cytosine pairs with thymine.", "Adenine pairs with uracil, while cytosine pairs with guanine."], "answer": 1},
  {"q": "A student concludes that the law of independent assortment applies equally to every pair of genes, regardless of chromosome location. Which evaluation best matches the lesson?", "options": ["Correct, because all genes always assort independently during meiosis.", "Correct, because chromosome location does not influence inheritance patterns.", "Incorrect, because nearby genes on the same chromosome tend to be inherited together.", "Incorrect, because genes on different chromosomes cannot be inherited together."], "answer": 2},
  {"q": "A database contains known genetic variants and their relationships to diseases. Which resource from the lesson would be the most appropriate choice?", "options": ["dbSNP", "ClinVar", "UCSC Genome Browser", "Ensembl Genome Browser"], "answer": 1},
  {"q": "During nerve transmission, ions move across cell membranes and produce electrical signals. Which classification of energy is most directly associated with this process?", "options": ["Chemical energy, because all cellular processes depend on stored bonds.", "Electrical energy, because charged particles produce voltage and signals.", "Mechanical energy, because ions physically move across the membrane.", "Radiant energy, because electrical signals originate from electromagnetic waves."], "answer": 1},
  {"q": "A student argues, “If a trait has high heritability, environmental experiences cannot meaningfully influence that trait.” Which evaluation best fits the modern perspective presented in the lesson?", "options": ["Correct, because genetic influence prevents environmental effects.", "Correct, because heritability measures the exact genetic cause of a trait.", "Incorrect, because genes and environments can both influence trait expression.", "Incorrect, because environmental influences completely determine behavior."], "answer": 2},
  {"q": "A stimulus causes a change in an internal variable. Which sequence correctly describes the roles of the components of a homeostatic control system?", "options": ["Receptor detects change → control center evaluates information → effector responds", "Control center detects change → receptor evaluates information → effector responds", "Effector detects change → receptor evaluates information → control center responds", "Receptor detects change → effector evaluates information → control center responds"], "answer": 0},
  {"q": "A scientist isolates a cellular process in which DNA information is used to produce messenger RNA. Which process is being examined?", "options": ["Replication, because DNA information is copied before cellular division.", "Translation, because RNA information is converted into proteins.", "Transcription, because DNA information is converted into messenger RNA.", "Regulation, because gene activity is controlled before protein production."], "answer": 2},
  {"q": "A neuron receives signals during a learning experience, leading to activation of specific genes in its nucleus. Which sequence best represents the molecular pathway described in the lesson?", "options": ["Neural signal → gene activation → mRNA formation → protein synthesis", "Neural signal → protein synthesis → gene activation → mRNA formation", "Neural signal → DNA replication → protein synthesis → gene activation", "Neural signal → chromosome division → mRNA formation → protein synthesis"], "answer": 0},
  {"q": "An atom has an atomic number of 11 and an atomic mass number of 23. Which description correctly represents its subatomic composition?", "options": ["11 protons, 11 neutrons, and 23 electrons", "11 protons, 12 neutrons, and 11 electrons", "23 protons, 11 neutrons, and 12 electrons", "23 protons, 12 neutrons, and 11 electrons"], "answer": 1},
  {"q": "The same monohybrid cross produces an F₂ phenotypic ratio of approximately 3 purple to 1 white. Which explanation best accounts for the appearance of white flowers after being absent in F₁?", "options": ["The recessive allele was diluted during hybrid formation.", "The recessive allele was destroyed during parental reproduction.", "The recessive allele remained present and segregated into gametes.", "The recessive allele became dominant during the second generation."], "answer": 2},
  {"q": "A student compares the work of Francis Galton with that of John B. Watson. Which conclusion is most accurate based on the lesson?", "options": ["Both primarily argued that environmental learning determines intellectual ability.", "Both primarily argued that inherited factors determine behavioral development.", "Galton emphasized heredity, whereas Watson emphasized learning and experience.", "Galton emphasized conditioning, whereas Watson emphasized biological determinism."], "answer": 2},
  {"q": "A true-breeding purple-flowered plant is crossed with a true-breeding white-flowered plant, and all F₁ offspring are purple. Which conclusion best follows from Mendel's model?", "options": ["Purple is dominant, while white remains present but unexpressed.", "White is dominant, while purple remains present but unexpressed.", "Purple and white blend, producing a permanently intermediate phenotype.", "White alleles disappear completely because purple alleles replace them."], "answer": 0},
  {"q": "A patient suffers extensive skin damage, causing greater water loss and increased exposure of deeper tissues. Which life function is most directly disrupted?", "options": ["Maintaining boundaries that separate internal and external environments", "Maintaining metabolism that supplies energy for cellular activities", "Maintaining responsiveness that detects and reacts to environmental changes", "Maintaining reproduction that produces new cells for growth and repair"], "answer": 0},
  {"q": "An organism has genotype YyRr for two independently assorting characteristics. Which set represents the gametes expected from this individual?", "options": ["YR and yr only", "Yr and yR only", "YR, Yr, yR, and yr", "YY, Yy, yR, and rr"], "answer": 2},
  {"q": "A cell has increased demand for ATP because it is performing energy-intensive activities. Which organelle would be expected to show the greatest functional importance?", "options": ["Golgi apparatus, because it packages proteins for cellular transport", "Mitochondrion, because it provides ATP for cellular energy needs", "Lysosome, because it digests materials that are no longer useful", "Nucleolus, because it produces ribosomes for protein synthesis"], "answer": 1},
  {"q": "During DNA replication, a researcher observes an enzyme separating the two DNA strands so that complementary nucleotides can later be added. Which enzyme is primarily responsible for the observed step?", "options": ["Ligase, because it seals discontinuities between DNA fragments.", "Helicase, because it separates the two strands of DNA.", "Polymerase, because it connects chromosomes during cell division.", "Primase, because it permanently joins the completed DNA strands."], "answer": 1},
  {"q": "A patient cannot effectively maintain normal posture and produces less body heat during movement. Which organ system is most directly responsible for these functions?", "options": ["Muscular system supports posture, locomotion, and heat production", "Skeletal system supports posture, mineral storage, and blood formation", "Nervous system supports posture, gland activation, and rapid responses", "Endocrine system supports posture, hormone secretion, and metabolic regulation"], "answer": 0},
  {"q": "A patient has difficulty maintaining blood glucose, body temperature, and reproductive functions because hormonal regulation is impaired. Which organ system is most directly involved?", "options": ["Endocrine system, because hormones regulate several body processes", "Nervous system, because neural signals control several body responses", "Cardiovascular system, because blood transports materials throughout the body", "Lymphatic system, because immune functions protect internal body conditions"], "answer": 0},
  {"q": "A patient develops impaired acid-base regulation because the kidneys are unable to perform their normal functions. Which urinary function is most directly affected?", "options": ["Regulation of acid-base balance and electrolyte concentrations in the body", "Regulation of oxygen exchange and carbon dioxide removal from blood", "Regulation of digestion and nutrient absorption within the digestive tract", "Regulation of posture and heat production through muscular activity"], "answer": 0},
  {"q": "A homeostatic mechanism responds to an increase in a physiological variable by reducing that variable toward its normal level. Which feedback mechanism is being demonstrated?", "options": ["Negative feedback reduces the original stimulus to restore internal stability", "Positive feedback increases the original stimulus to extend the response", "Negative feedback increases the original stimulus to move farther from stability", "Positive feedback reduces the original stimulus to restore internal stability"], "answer": 0}
];
const N = QUESTIONS.length;

const ICON_CHECK = '<svg class="mark" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="currentColor"/><path d="M5.6 10.4l2.9 2.9 5.9-6.4" fill="none" stroke="var(--card)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_X = '<svg class="mark" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="currentColor"/><path d="M6.6 6.6l6.8 6.8M13.4 6.6l-6.8 6.8" fill="none" stroke="var(--card)" stroke-width="2" stroke-linecap="round"/></svg>';
const ICON_ALERT = '<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 5.6v5.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="10" cy="14" r="1.2" fill="currentColor"/></svg>';

const state = {
  mode: 'take',      // 'take' | 'result'
  order: [],         // question indices in display order
  opts: {},          // question index -> option indices in display order
  answers: {},       // question index -> chosen original option index
  warn: false,
  filter: 'all',
  attempt: 0,
  best: null,
  result: null
};

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function newAttempt() {
  const prev = state.order.join(',');
  let order;
  do { order = shuffle([...Array(N).keys()]); } while (N > 1 && order.join(',') === prev);
  state.order = order;
  state.opts = {};
  order.forEach((qi) => { state.opts[qi] = shuffle([0, 1, 2, 3]); });
  state.answers = {};
  state.warn = false;
  state.filter = 'all';
  state.result = null;
  state.mode = 'take';
  state.attempt += 1;
  render();
}

function grade() {
  const per = {};
  let correct = 0, wrong = 0, skipped = 0;
  state.order.forEach((qi) => {
    const a = state.answers[qi];
    if (a === undefined) { skipped++; per[qi] = 'skipped'; }
    else if (a === QUESTIONS[qi].answer) { correct++; per[qi] = 'correct'; }
    else { wrong++; per[qi] = 'wrong'; }
  });
  return { correct, wrong, skipped, per };
}

/* ---------- rendering ---------- */

function headHTML() {
  const meta = state.mode === 'take'
    ? `${N} questions · Attempt ${state.attempt}`
    : `Attempt ${state.attempt} · review`;
  return `<section class="card head">
    <h1 id="title" tabindex="-1">Long Quiz</h1>
    <p class="meta">${meta}</p>
    <p>Choose the best answer for each question. Questions and choices are shuffled every attempt, so the letters change each time.</p>
  </section>`;
}

function takeCard(qi, pos) {
  const q = QUESTIONS[qi];
  const opts = state.opts[qi].map((oi) => `
      <label class="opt">
        <input type="radio" name="q${qi}" value="${oi}" data-qi="${qi}"${state.answers[qi] === oi ? ' checked' : ''}>
        <span class="radio" aria-hidden="true"></span>
        <span class="txt">${esc(q.options[oi])}</span>
      </label>`).join('');
  return `<section class="card q" id="q-${qi}">
    <fieldset>
      <legend><span class="q-text"><span class="num">${pos + 1}.</span> ${esc(q.q)}</span></legend>
      <div class="opts">${opts}</div>
    </fieldset>
    <p class="err">${ICON_ALERT}<span>This question hasn't been answered.</span></p>
  </section>`;
}

function resultCard(qi, pos) {
  const q = QUESTIONS[qi];
  const st = state.result.per[qi];
  const sel = state.answers[qi];
  const opts = state.opts[qi].map((oi) => {
    const isCorrect = oi === q.answer;
    const isSel = sel === oi;
    let cls = 'opt res', icon = '<span class="radio" aria-hidden="true"></span>', tag = '';
    if (isCorrect) { cls += ' correct'; icon = ICON_CHECK; tag = isSel ? 'Your answer · Correct' : 'Correct answer'; }
    else if (isSel) { cls += ' wrong'; icon = ICON_X; tag = 'Your answer · Incorrect'; }
    return `<div class="${cls}">${icon}<span class="txt">${esc(q.options[oi])}${tag ? `<span class="tag">${tag}</span>` : ''}</span></div>`;
  }).join('');
  const pts = st === 'correct' ? '1/1 points' : '0/1 points';
  const skip = st === 'skipped' ? `<p class="skip-note">${ICON_ALERT}<span>Not answered</span></p>` : '';
  return `<section class="card q ${st}" data-st="${st}"${state.filter === 'missed' && st === 'correct' ? ' hidden' : ''}>
    <div role="group" aria-label="Question ${pos + 1}">
      <div class="legend-like">
        <span class="q-text"><span class="num">${pos + 1}.</span> ${esc(q.q)}</span>
        <span class="pts">${pts}</span>
      </div>
      ${skip}
      <div class="opts">${opts}</div>
    </div>
  </section>`;
}

function summaryHTML() {
  const r = state.result;
  const pct = Math.round((r.correct / N) * 100);
  const missed = r.wrong + r.skipped;
  const perfect = r.correct === N;
  return `<section class="card summary" aria-label="Score">
    <p class="eyebrow">Your score</p>
    <div class="score"><span class="big">${r.correct}</span><span class="of">/ ${N}</span><span class="pct">${pct}%</span></div>
    <div class="split" aria-hidden="true">
      <span class="s-ok" style="flex:${r.correct}"></span><span class="s-bad" style="flex:${r.wrong}"></span><span class="s-skip" style="flex:${r.skipped}"></span>
    </div>
    <ul class="stats">
      <li><span class="dot" style="background:var(--ok)"></span>${r.correct} correct</li>
      <li><span class="dot" style="background:var(--bad)"></span>${r.wrong} incorrect</li>
      <li><span class="dot" style="background:var(--muted);opacity:.6"></span>${r.skipped} not answered</li>
    </ul>
    <p class="meta">${perfect ? 'Perfect score. ' : ''}Attempt ${state.attempt} · Best so far ${state.best}/${N}</p>
    <div class="row">
      <button class="btn primary" data-action="retry">Try again</button>
      <div class="seg" role="group" aria-label="Filter questions">
        <button data-action="filter" data-filter="all" aria-pressed="${state.filter === 'all'}">All ${N}</button>
        <button data-action="filter" data-filter="missed" aria-pressed="${state.filter === 'missed'}"${missed === 0 ? ' disabled' : ''}>Missed ${missed}</button>
      </div>
    </div>
    <p class="foot">Try again reshuffles every question and its choices.</p>
  </section>`;
}

function render() {
  const app = $('app');
  const take = state.mode === 'take';
  $('topbar').hidden = !take;
  let html = headHTML();
  if (take) {
    html += state.order.map((qi, pos) => takeCard(qi, pos)).join('');
    html += `<div class="actions">
      <div class="notice" id="notice" role="alert" hidden>
        <span id="noticeText"></span>
        <button class="btn ghost" data-action="first">Go to first</button>
        <button class="btn ghost" data-action="force">Submit anyway</button>
      </div>
      <button class="btn primary" data-action="submit">Submit</button>
    </div>`;
    app.innerHTML = html;
    syncProgress();
  } else {
    html += summaryHTML();
    html += state.order.map((qi, pos) => resultCard(qi, pos)).join('');
    html += `<div class="actions"><button class="btn primary" data-action="retry">Try again</button></div>`;
    app.innerHTML = html;
  }
}

function unanswered() {
  return state.order.filter((qi) => state.answers[qi] === undefined);
}

function syncProgress() {
  const done = N - unanswered().length;
  $('pcount').textContent = `${done} of ${N} answered`;
  $('pfill').style.width = `${(done / N) * 100}%`;
  const left = unanswered();
  const notice = $('notice');
  if (notice) {
    const show = state.warn && left.length > 0;
    notice.hidden = !show;
    if (show) $('noticeText').innerHTML = `<b>${left.length}</b> ${left.length === 1 ? 'question is' : 'questions are'} not answered yet.`;
  }
  state.order.forEach((qi) => {
    const el = $('q-' + qi);
    if (el) el.classList.toggle('unanswered', state.warn && state.answers[qi] === undefined);
  });
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
  const t = $('title');
  if (t) t.focus({ preventScroll: true });
}

function goFirstUnanswered() {
  const left = unanswered();
  if (!left.length) return;
  const el = $('q-' + left[0]);
  if (el) el.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' });
}

function submit(force) {
  if (unanswered().length > 0 && !force) {
    state.warn = true;
    syncProgress();
    goFirstUnanswered();
    return;
  }
  state.result = grade();
  state.best = state.best === null ? state.result.correct : Math.max(state.best, state.result.correct);
  state.mode = 'result';
  state.filter = 'all';
  render();
  scrollTop();
}

/* ---------- events ---------- */

$('app').addEventListener('change', (e) => {
  const t = e.target;
  if (t.matches && t.matches('input[type="radio"][data-qi]')) {
    state.answers[+t.dataset.qi] = +t.value;
    syncProgress();
  }
});

$('app').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn || btn.disabled) return;
  const a = btn.dataset.action;
  if (a === 'submit') submit(false);
  else if (a === 'force') submit(true);
  else if (a === 'first') goFirstUnanswered();
  else if (a === 'retry') { newAttempt(); scrollTop(); }
  else if (a === 'filter') {
    state.filter = btn.dataset.filter;
    document.querySelectorAll('.seg button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === state.filter)));
    document.querySelectorAll('.q[data-st]').forEach((c) => { c.hidden = state.filter === 'missed' && c.dataset.st === 'correct'; });
  }
});

newAttempt();