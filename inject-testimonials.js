const fs = require('fs');
const path = require('path');
const dir = process.cwd();

const testimonialsHtml = `
<!-- Testimonials Section -->
<section class="bg-surface-bright my-20 relative font-['Manrope']">
  <div class="container z-10 mx-auto px-4 max-w-[1260px]">
    <!-- Header -->
    <div class="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center">
      <div class="flex justify-center">
        <div class="border border-outline-variant py-1 px-4 rounded-lg font-label-sm text-label-sm">Testimonials</div>
      </div>
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter mt-5 text-[#0F4C81] dark:text-white">
        What our users say
      </h2>
      <p class="mt-5 text-on-surface-variant">
        See what our customers have to say about us.
      </p>
    </div>

    <!-- Columns Container -->
    <div class="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
      <!-- Column 1 -->
      <div class="flex flex-col gap-6 pb-6 animate-marquee-15">
        <!-- Original block -->
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Briana Patton" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Briana Patton</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Operations Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Bilal Ahmed" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Bilal Ahmed</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">IT Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/3.jpg" alt="Saman Malik" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Saman Malik</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Customer Support Lead</div>
            </div>
          </div>
        </div>
        <!-- Duplicated block for marquee -->
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Briana Patton" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Briana Patton</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Operations Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Bilal Ahmed" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Bilal Ahmed</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">IT Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/3.jpg" alt="Saman Malik" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Saman Malik</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Customer Support Lead</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 2 -->
      <div class="hidden md:flex flex-col gap-6 pb-6 animate-marquee-19">
        <!-- Original block -->
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/4.jpg" alt="Omar Raza" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Omar Raza</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">CEO</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Its robust features and quick support have transformed our workflow, making us significantly more efficient.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/5.jpg" alt="Zainab Hussain" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Zainab Hussain</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Project Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/6.jpg" alt="Aliza Khan" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Aliza Khan</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Business Analyst</div>
            </div>
          </div>
        </div>
        <!-- Duplicated block -->
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/4.jpg" alt="Omar Raza" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Omar Raza</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">CEO</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Its robust features and quick support have transformed our workflow, making us significantly more efficient.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/5.jpg" alt="Zainab Hussain" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Zainab Hussain</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Project Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/6.jpg" alt="Aliza Khan" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Aliza Khan</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Business Analyst</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 3 -->
      <div class="hidden lg:flex flex-col gap-6 pb-6 animate-marquee-17">
        <!-- Original block -->
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Our business functions improved with a user-friendly design and positive customer feedback.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Farhan Siddiqui" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Farhan Siddiqui</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Marketing Director</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/8.jpg" alt="Sana Sheikh" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Sana Sheikh</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Sales Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Using this ERP, our online presence and conversions significantly improved, boosting business performance.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/9.jpg" alt="Hassan Ali" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Hassan Ali</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">E-commerce Manager</div>
            </div>
          </div>
        </div>
        <!-- Duplicated block -->
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Our business functions improved with a user-friendly design and positive customer feedback.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Farhan Siddiqui" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Farhan Siddiqui</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Marketing Director</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/women/8.jpg" alt="Sana Sheikh" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Sana Sheikh</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">Sales Manager</div>
            </div>
          </div>
        </div>
        <div class="p-10 rounded-3xl border border-outline-variant shadow-lg shadow-primary/10 max-w-xs w-full bg-white dark:bg-slate-800">
          <div>Using this ERP, our online presence and conversions significantly improved, boosting business performance.</div>
          <div class="flex items-center gap-3 mt-5">
            <img width="40" height="40" src="https://randomuser.me/api/portraits/men/9.jpg" alt="Hassan Ali" class="h-10 w-10 rounded-full object-cover">
            <div class="flex flex-col">
              <div class="font-medium tracking-tight leading-5 text-on-surface">Hassan Ali</div>
              <div class="leading-5 opacity-60 tracking-tight text-on-surface-variant text-sm">E-commerce Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

let content = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

if (!content.includes('<!-- Testimonials Section -->')) {
    content = content.replace(/<footer/, testimonialsHtml + '\n<footer');
    fs.writeFileSync(path.join(dir, 'index.html'), content, 'utf8');
    console.log('Testimonials added to index.html');
} else {
    console.log('Testimonials already exist');
}
